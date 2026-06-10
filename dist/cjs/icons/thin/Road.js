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
var Road_exports = {};
__export(Road_exports, {
  default: () => Road_default
});
module.exports = __toCommonJS(Road_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RoadThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M573.163 415.855L447.448 63.855C440.626 44.752 422.53 32 402.245 32H173.755C153.47 32 135.374 44.752 128.552 63.855L2.837 415.855C-8.327 447.115 14.847 480 48.04 480H527.958C561.153 480 584.327 447.115 573.163 415.855ZM554.116 450.434C548.04 459.055 538.507 464 527.958 464H295.999V392C295.999 387.594 292.405 384 287.999 384S279.999 387.594 279.999 392V464H48.04C37.493 464 27.96 459.055 21.884 450.434S14.357 431.17 17.905 421.236L143.62 69.236C148.155 56.535 160.267 48 173.755 48H279.999V120C279.999 124.406 283.593 128 287.999 128S295.999 124.406 295.999 120V48H402.245C415.733 48 427.845 56.535 432.38 69.236L558.095 421.236C561.644 431.17 560.192 441.811 554.116 450.434ZM287.999 192C283.593 192 279.999 195.594 279.999 200V312C279.999 316.406 283.593 320 287.999 320S295.999 316.406 295.999 312V200C295.999 195.594 292.405 192 287.999 192Z" })
  }
));
RoadThin.displayName = "RoadThin";
var Road_default = RoadThin;
