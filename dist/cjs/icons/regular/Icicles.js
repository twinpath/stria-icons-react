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
var Icicles_exports = {};
__export(Icicles_exports, {
  default: () => Icicles_default
});
module.exports = __toCommonJS(Icicles_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IciclesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M479.962 0H31.981C10.607 0 -4.767 20.75 1.357 41.25L80.854 277.125C83.354 284.25 89.729 288 95.978 288S108.728 284.375 111.103 277.125L139.852 190.5L176.225 371.625C178.225 379.875 184.975 384 191.849 384S205.599 379.875 207.474 371.625L246.222 180.875L272.596 276.625C274.846 284.25 281.346 288 287.845 288C294.345 288 300.845 284.25 303.22 276.625L341.218 141.75L400.091 499.25C401.966 507.75 408.965 512 415.965 512C422.965 512 429.965 507.75 431.714 499.25L511.461 37.875C515.086 18.25 499.962 0 479.962 0ZM95.728 171.25L54.23 48H136.727L95.728 171.25ZM199.224 171.25L192.099 206.25L186.975 181L160.226 48H224.223L199.224 171.25ZM295.22 128.75L288.345 153.125L259.347 48H318.094L295.22 128.75ZM416.715 303.75L388.716 134L374.592 48H460.963L416.715 303.75Z" })
  }
));
IciclesRegular.displayName = "IciclesRegular";
var Icicles_default = IciclesRegular;
