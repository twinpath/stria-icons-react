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
var Toothbrush_exports = {};
__export(Toothbrush_exports, {
  default: () => Toothbrush_default
});
module.exports = __toCommonJS(Toothbrush_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToothbrushRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M552 432H400V280C400 266.75 389.25 256 376 256S352 266.75 352 280V432H320V280C320 266.75 309.25 256 296 256S272 266.75 272 280V432H240V280C240 266.75 229.25 256 216 256S192 266.75 192 280V432H160V280C160 266.75 149.25 256 136 256S112 266.75 112 280V432H80V280C80 266.75 69.25 256 56 256S32 266.75 32 280V432H24C10.75 432 0 442.75 0 456S10.75 480 24 480H552C565.25 480 576 469.25 576 456S565.25 432 552 432ZM64 224H416C449.704 224 478.868 197.85 479.934 164.162C481.913 101.652 439.178 45.9 381.266 32.381C380.157 32.123 379.047 32 377.954 32C369.026 32 361.079 40.168 362.577 49.332C366.045 70.557 350.399 96 325.5 96H67.336C35.461 96 5.954 117.82 0.868 149.287C-5.617 189.41 25.114 224 64 224ZM67.336 144H325.5C349.94 144 373.219 133.102 389.37 114.098C394.323 108.27 398.487 101.842 401.799 95.035C420.889 111.061 432.797 136.111 431.957 162.645C431.733 169.76 424.276 176 416 176H64C57.551 176 53.582 172.471 51.791 170.365C49.604 167.797 47.213 163.381 48.254 156.945C49.387 149.928 58.127 144 67.336 144Z" })
  }
));
ToothbrushRegular.displayName = "ToothbrushRegular";
var Toothbrush_default = ToothbrushRegular;
