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
var MartiniGlassCitrus_exports = {};
__export(MartiniGlassCitrus_exports, {
  default: () => MartiniGlassCitrus_default
});
module.exports = __toCommonJS(MartiniGlassCitrus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MartiniGlassCitrusThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M466.119 4.127C397.001 -12.753 328.138 23.7 300.552 85.137C298.632 89.414 300.568 94.43 304.954 96.088C308.995 97.616 313.394 95.602 315.165 91.663C340.749 34.725 406.204 1.936 470.197 21.854C518.603 36.92 554.167 80.18 559.316 130.616C567.13 207.172 506.992 272 432 272C410.055 272 388.524 266.258 369.249 255.327C365.487 253.192 360.745 254.184 358.396 257.817L358.388 257.829C355.942 261.612 357.036 266.778 360.946 269.012C382.721 281.457 407.12 288 432 288C510.711 288 574.867 224.534 575.986 146.084C576.933 79.612 530.699 19.899 466.119 4.127ZM312.001 496H216.002V378.895L414.141 141.125C416.141 138.735 416.563 135.422 415.251 132.61C413.922 129.797 411.11 128 408.001 128H8.004C4.894 128 2.082 129.797 0.754 132.61C-0.559 135.422 -0.137 138.735 1.863 141.125L200.002 378.895V496H104.003C99.581 496 96.003 499.579 96.003 504S99.581 512 104.003 512H312.001C316.423 512 320.001 508.422 320.001 504S316.423 496 312.001 496ZM25.082 144H390.923L208.002 363.5L25.082 144Z" })
  }
));
MartiniGlassCitrusThin.displayName = "MartiniGlassCitrusThin";
var MartiniGlassCitrus_default = MartiniGlassCitrusThin;
