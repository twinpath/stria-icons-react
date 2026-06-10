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
var FloppyDiskCircleArrowRight_exports = {};
__export(FloppyDiskCircleArrowRight_exports, {
  default: () => FloppyDiskCircleArrowRight_default
});
module.exports = __toCommonJS(FloppyDiskCircleArrowRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FloppyDiskCircleArrowRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 256C188.799 256 160 284.799 160 320C160 355.199 188.799 384 224 384C235.834 384 246.809 380.527 256.346 374.867C256.258 372.57 256 370.318 256 368C256 337.742 263.65 309.273 277.1 284.404C265.578 267.307 246.049 256 224 256ZM64 432C55.164 432 48 424.836 48 416V96C48 87.162 55.164 80 64 80H80V184C80 197.254 90.746 208 104 208H296C309.254 208 320 197.254 320 184V83.875L398.25 162.125C399.371 163.244 400 164.766 400 166.35V195.047C410.391 193.135 421.057 192 432 192C437.402 192 442.723 192.33 448 192.807V163.799C448 151.123 442.965 138.963 433.999 130L350.053 46.053C341.055 37.055 328.85 32 316.125 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H296.234C284.455 465.736 275.031 449.516 268.182 432H64ZM128 80H272V160H128V80ZM432 224C352.461 224 287.998 288.463 287.998 368S352.461 512 432 512C511.535 512 575.998 447.537 575.998 368S511.535 224 432 224ZM507.311 379.312L451.311 435.312C448.186 438.438 444.092 440 439.998 440S431.811 438.438 428.686 435.312C422.436 429.062 422.436 418.937 428.686 412.688L457.373 384H367.998C359.162 384 351.998 376.836 351.998 368S359.162 352 367.998 352H457.373L428.686 323.312C422.436 317.062 422.436 306.937 428.686 300.688S445.061 294.438 451.311 300.688L507.311 356.688C513.561 362.938 513.561 373.062 507.311 379.312Z" })
  }
));
FloppyDiskCircleArrowRightRegular.displayName = "FloppyDiskCircleArrowRightRegular";
var FloppyDiskCircleArrowRight_default = FloppyDiskCircleArrowRightRegular;
