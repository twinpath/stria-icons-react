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
var InputText_exports = {};
__export(InputText_exports, {
  default: () => InputText_default
});
module.exports = __toCommonJS(InputText_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InputTextRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M213.475 172.234C205.352 155.922 178.664 155.922 170.539 172.234L98.543 316.234C92.605 328.078 97.418 342.484 109.293 348.422C121.197 354.359 135.541 349.578 141.479 337.672L146.838 326.953H237.178L242.537 337.672C246.756 346.109 255.223 350.953 264.035 350.953C267.629 350.953 271.285 350.141 274.723 348.422C286.598 342.484 291.41 328.078 285.473 316.234L213.475 172.234ZM170.836 278.953L192.008 236.609L213.18 278.953H170.836ZM456 220C456 186.922 429.094 160 396 160H344C330.75 160 320 170.75 320 184V328C320 341.25 330.75 352 344 352H412C445.094 352 472 325.094 472 292C472 273.406 463.5 256.766 450.188 245.75C453.906 237.953 456 229.219 456 220ZM368 208H396C402.625 208 408 213.391 408 220S402.625 232 396 232H368V208ZM412 304H368V280H412C418.625 280 424 285.391 424 292C424 298.625 418.625 304 412 304ZM576.002 64H63.998C28.654 64 0 92.652 0 128V384C0 419.346 28.654 448 63.998 448H576.002C611.346 448 640 419.348 640 384V128C640 92.654 611.346 64 576.002 64ZM592.002 384C592.002 392.836 584.838 400 576.002 400H63.998C55.162 400 47.998 392.836 47.998 384V128C47.998 119.162 55.162 112 63.998 112H576.002C584.838 112 592.002 119.162 592.002 128V384Z" })
  }
));
InputTextRegular.displayName = "InputTextRegular";
var InputText_default = InputTextRegular;
