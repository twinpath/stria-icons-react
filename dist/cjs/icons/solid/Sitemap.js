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
var Sitemap_exports = {};
__export(Sitemap_exports, {
  default: () => Sitemap_default
});
module.exports = __toCommonJS(Sitemap_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SitemapSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 352H32C14.375 352 0 366.375 0 384V480C0 497.625 14.375 512 32 512H128C145.625 512 160 497.625 160 480V384C160 366.375 145.625 352 128 352ZM104 272H296V320H344V272H536V320H584V262.375C584 241.25 566.75 224 545.625 224H344V160H384C401.625 160 416 145.625 416 128V32C416 14.375 401.625 0 384 0H256C238.375 0 224 14.375 224 32V128C224 145.625 238.375 160 256 160H296V224H94.375C73.25 224 56 241.25 56 262.375V320H104V272ZM368 352H272C254.375 352 240 366.375 240 384V480C240 497.625 254.375 512 272 512H368C385.625 512 400 497.625 400 480V384C400 366.375 385.625 352 368 352ZM608 352H512C494.375 352 480 366.375 480 384V480C480 497.625 494.375 512 512 512H608C625.625 512 640 497.625 640 480V384C640 366.375 625.625 352 608 352Z" })
  }
));
SitemapSolid.displayName = "SitemapSolid";
var Sitemap_default = SitemapSolid;
