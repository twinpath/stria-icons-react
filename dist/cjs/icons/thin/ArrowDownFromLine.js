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
var ArrowDownFromLine_exports = {};
__export(ArrowDownFromLine_exports, {
  default: () => ArrowDownFromLine_default
});
module.exports = __toCommonJS(ArrowDownFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownFromLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M186.344 477.656C189.469 480.781 194.531 480.781 197.656 477.656L349.656 325.656C351.219 324.094 352 322.062 352 320S351.219 315.906 349.656 314.344C346.531 311.219 341.469 311.219 338.344 314.344L200 452.688V136C200 131.594 196.422 128 192 128S184 131.594 184 136V452.688L45.656 314.344C42.531 311.219 37.469 311.219 34.344 314.344S31.219 322.531 34.344 325.656L186.344 477.656ZM8 48H376C380.418 48 384 44.418 384 40S380.418 32 376 32H8C3.582 32 0 35.582 0 40S3.582 48 8 48Z" })
  }
));
ArrowDownFromLineThin.displayName = "ArrowDownFromLineThin";
var ArrowDownFromLine_default = ArrowDownFromLineThin;
