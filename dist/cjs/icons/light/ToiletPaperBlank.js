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
var ToiletPaperBlank_exports = {};
__export(ToiletPaperBlank_exports, {
  default: () => ToiletPaperBlank_default
});
module.exports = __toCommonJS(ToiletPaperBlank_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToiletPaperBlankLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.999 192C511.999 146.406 491.372 112 463.997 112C436.62 112 415.993 146.406 415.993 192S436.62 272 463.997 272C491.372 272 511.999 237.594 511.999 192ZM447.995 192C447.995 164.643 454.87 144 463.997 144C473.122 144 479.997 164.643 479.997 192C479.997 219.355 473.122 240 463.997 240C454.87 240 447.995 219.355 447.995 192ZM463.997 0H143.981C82.104 0 31.977 86 31.977 192V364.125C31.977 405.25 22.227 426.875 0.85 491C-2.65 501.25 5.1 512 15.977 512H328.866C342.741 512 354.866 503.25 359.241 490.125C370.491 456.625 383.993 416 383.993 384V192C383.993 105.281 420.62 32 463.997 32C507.372 32 543.999 105.281 543.999 192S507.372 352 463.997 352C455.151 352 447.995 359.156 447.995 368S455.151 384 463.997 384C526.811 384 576.001 299.656 576.001 192S526.811 0 463.997 0ZM351.991 192V364.125C351.991 412.922 342.024 439.449 328.991 480H38.227C64.76 411.016 63.979 377.213 63.979 364.125V192C63.979 97.75 106.106 32 143.981 32H401.303C371.362 66.117 351.991 124.457 351.991 192Z" })
  }
));
ToiletPaperBlankLight.displayName = "ToiletPaperBlankLight";
var ToiletPaperBlank_default = ToiletPaperBlankLight;
