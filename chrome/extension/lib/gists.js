import _ from "lodash";
import { loadStylefileFromString } from "./stylefile";

export const STYLEFILE_NAMES = ["Stylefile.yml", "Stylefile"];
export const SPECIAL_QUERY_PARAMS = {
  gist_id: "__styleurl"
};

export { getGistById } from "./api";

export const getGistIDFromURL = url => {
  const queryString = _.last(url.split("?"));

  if (!queryString) {
    return null;
  }

  const params = new URLSearchParams(queryString);
  const param = params.get(SPECIAL_QUERY_PARAMS.gist_id);

  if (!param) {
    return null;
  }

  return _.last(param.split("gist_"));
};

export const getStylesheetsFromGist = gist => {
  return _
    .keys(gist.files || [])
    .filter(fileName => {
      const file = gist.files[fileName];

      return file.type === "text/css";
    })
    .map(filename => [filename, gist.files[filename].content]);
};

export const loadStylefileFromGist = gist => {
  const filename = _.keys(gist.files || []).find(fileName => {
    return STYLEFILE_NAMES.includes(fileName);
  });

  if (!filename) {
    return null;
  }

  return loadStylefileFromString(gist.files[filename].content);
};
