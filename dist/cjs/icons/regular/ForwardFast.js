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
var ForwardFast_exports = {};
__export(ForwardFast_exports, {
  default: () => ForwardFast_default
});
module.exports = __toCommonJS(ForwardFast_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ForwardFastRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 96.027V415.973C0 435.189 15.713 448 32.213 448C39.215 448 46.355 445.693 52.5 440.594L224 285.244V415.973C224 435.189 239.713 448 256.213 448C263.215 448 270.355 445.693 276.5 440.594L448 285.244V423.967C448 437.223 458.744 447.967 472 447.967C485.254 447.967 496 437.223 496 423.967V88.029C496 74.775 485.256 64.031 472.002 64.031H472C458.744 64.031 448 74.777 448 88.031V227.879L276.5 71.406C270.355 66.307 263.213 64 256.213 64C239.711 64 224 76.809 224 96.027V227.879L52.5 71.406C46.355 66.307 39.213 64 32.213 64C15.711 64 0 76.809 0 96.027ZM272 132.277L408.193 256.537L272 379.904V132.277ZM48 132.277L184.193 256.537L48 379.904V132.277Z" })
  }
));
ForwardFastRegular.displayName = "ForwardFastRegular";
var ForwardFast_default = ForwardFastRegular;
