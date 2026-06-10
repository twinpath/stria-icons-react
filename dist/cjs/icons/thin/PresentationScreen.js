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
var PresentationScreen_exports = {};
__export(PresentationScreen_exports, {
  default: () => PresentationScreen_default
});
module.exports = __toCommonJS(PresentationScreen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PresentationScreenThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M568 0H8C3.594 0 0 3.578 0 8S3.594 16 8 16H568C572.406 16 576 12.422 576 8S572.406 0 568 0ZM536 48C531.594 48 528 51.578 528 56V312C528 325.234 517.219 336 504 336H72C58.781 336 48 325.234 48 312V56C48 51.578 44.406 48 40 48S32 51.578 32 56V312C32 334.062 49.938 352 72 352H280V404.688L186.344 498.344C183.219 501.469 183.219 506.531 186.344 509.656S194.531 512.781 197.656 509.656L284.686 422.627C285.768 423.174 286.709 424 288 424S290.232 423.174 291.314 422.627L378.344 509.656C379.906 511.219 381.938 512 384 512S388.094 511.219 389.656 509.656C392.781 506.531 392.781 501.469 389.656 498.344L296 404.688V352H504C526.062 352 544 334.062 544 312V56C544 51.578 540.406 48 536 48Z" })
  }
));
PresentationScreenThin.displayName = "PresentationScreenThin";
var PresentationScreen_default = PresentationScreenThin;
