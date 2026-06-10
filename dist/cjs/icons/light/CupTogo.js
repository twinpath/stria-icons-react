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
var CupTogo_exports = {};
__export(CupTogo_exports, {
  default: () => CupTogo_default
});
module.exports = __toCommonJS(CupTogo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CupTogoLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 96H414.207L393.125 32.781C386.562 13.188 368.281 0 347.594 0H100.406C79.719 0 61.438 13.188 54.844 32.812L33.791 96H16C7.156 96 0 103.156 0 112S7.156 128 16 128H432C440.844 128 448 120.844 448 112S440.844 96 432 96ZM67.535 96L85.187 42.969C87.406 36.406 93.5 32 100.406 32H347.594C354.5 32 360.594 36.406 362.781 42.938L380.461 96H67.535ZM385.594 160.094C376.969 158.938 368.969 165.625 368.094 174.406L363.133 224H84.867L79.906 174.406C79.031 165.625 71 158.906 62.406 160.094C53.625 160.969 47.188 168.812 48.094 177.594L77.219 468.781C79.656 493.406 100.188 512 124.969 512H323.031C347.812 512 368.344 493.406 370.781 468.781L399.906 177.594C400.812 168.812 394.375 160.969 385.594 160.094ZM338.969 465.594C338.125 473.812 331.281 480 323.031 480H124.969C116.719 480 109.875 473.812 109.031 465.594L104.07 416H343.93L338.969 465.594ZM347.129 384H100.871L88.066 256H359.934L347.129 384Z" })
  }
));
CupTogoLight.displayName = "CupTogoLight";
var CupTogo_default = CupTogoLight;
