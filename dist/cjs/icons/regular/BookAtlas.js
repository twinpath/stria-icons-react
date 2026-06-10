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
var BookAtlas_exports = {};
__export(BookAtlas_exports, {
  default: () => BookAtlas_default
});
module.exports = __toCommonJS(BookAtlas_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookAtlasRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M232 320C298.25 320 352 266.25 352 200S298.25 80 232 80S112 133.75 112 200S165.75 320 232 320ZM318.375 184H283.75C282.375 160.375 278 139 271.5 121.75C295.625 134 313.375 156.625 318.375 184ZM283.75 216H318.375C313.375 243.375 295.5 266 271.5 278.25C278 261 282.375 239.625 283.75 216ZM232 114.25C238.875 122.625 249.5 146.625 252 184H212C214.5 146.625 225.125 122.625 232 114.25ZM252 216C249.5 253.375 238.875 277.375 232 285.75C225.125 277.375 214.5 253.375 212 216H252ZM192.5 121.75C186 139 181.625 160.375 180.25 184H145.625C150.625 156.625 168.375 134 192.5 121.75ZM180.25 216C181.625 239.625 186 261 192.5 278.25C168.5 266 150.625 243.375 145.625 216H180.25ZM424 400C437.25 400 448 389.25 448 376V24C448 10.75 437.25 0 424 0H80C35.891 0 0 35.875 0 80V432C0 476.125 35.891 512 80 512H424C437.25 512 448 501.25 448 488S437.25 464 424 464H416V400H424ZM368 464H80C62.359 464 48 449.656 48 432S62.359 400 80 400H368V464ZM400 352H80C68.625 352 57.797 354.375 48 358.688V80C48 62.344 62.359 48 80 48H400V352Z" })
  }
));
BookAtlasRegular.displayName = "BookAtlasRegular";
var BookAtlas_default = BookAtlasRegular;
