var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var LocationPen_exports = {};
__export(LocationPen_exports, {
  default: () => LocationPen_default
});
module.exports = __toCommonJS(LocationPen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationPenThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M270.406 104.198C259.479 93.27 241.746 93.257 230.807 104.196L107.871 227.129C107.301 228.193 106.768 229.189 106.199 230.254L96.115 280.676C95.289 284.819 98.57 287.998 102.152 287.998C102.541 287.998 102.936 287.961 103.328 287.881L153.742 277.799C154.809 277.229 155.807 276.694 156.875 276.121L279.811 153.204C290.746 142.271 290.748 124.544 279.814 113.608L270.406 104.198ZM147.674 262.695L114.709 269.287L121.303 236.326L213.16 144.47L239.537 170.847L147.674 262.695ZM268.498 141.89L250.85 159.534L224.473 133.157L242.121 115.509C246.809 110.825 254.4 110.819 259.092 115.511L268.5 124.921C273.176 129.597 273.203 137.185 268.498 141.89ZM192 0C85.969 0 0 85.969 0 192.001C0 269.408 26.969 291.033 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.033 384 269.408 384 192.001C384 85.969 298.031 0 192 0ZM198.564 492.566C196.496 495.553 193.564 496 192 496S187.504 495.553 185.451 492.59C159.52 455 137.352 423.421 118.432 396.468C31.639 272.832 16 250.553 16 192.001C16 94.954 94.953 16 192 16S368 94.954 368 192.001C368 250.553 352.361 272.832 265.568 396.468C246.648 423.421 224.48 455 198.564 492.566Z" })
  }
));
LocationPenThin.displayName = "LocationPenThin";
var LocationPen_default = LocationPenThin;
