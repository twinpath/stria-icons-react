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
var TugrikSign_exports = {};
__export(TugrikSign_exports, {
  default: () => TugrikSign_default
});
module.exports = __toCommonJS(TugrikSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TugrikSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 40C384 44.422 380.422 48 376 48H200V213.766L318.062 184.25C322.406 182.938 326.687 185.781 327.75 190.062C328.844 194.344 326.219 198.687 321.938 199.75L200 230.234V309.766L318.062 280.25C322.406 278.906 326.687 281.781 327.75 286.062C328.844 290.344 326.219 294.687 321.938 295.75L200 326.234V472C200 476.422 196.422 480 192 480S184 476.422 184 472V330.234L65.938 359.75C65.281 359.938 64.625 360 64 360C60.406 360 57.156 357.562 56.25 353.938C55.156 349.656 57.781 345.313 62.062 344.25L184 313.766V234.234L65.938 263.75C65.281 263.938 64.625 264 64 264C60.406 264 57.156 261.562 56.25 257.938C55.156 253.656 57.781 249.312 62.062 248.25L184 217.766V48H8C3.578 48 0 44.422 0 40S3.578 32 8 32H376C380.422 32 384 35.578 384 40Z" })
  }
));
TugrikSignThin.displayName = "TugrikSignThin";
var TugrikSign_default = TugrikSignThin;
