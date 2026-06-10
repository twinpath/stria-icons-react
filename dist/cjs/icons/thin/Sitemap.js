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
const SitemapThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 352H256C238.326 352 224 366.326 224 384V480C224 497.672 238.326 512 256 512H384C401.674 512 416 497.672 416 480V384C416 366.326 401.674 352 384 352ZM400 480C400 488.822 392.822 496 384 496H256C247.178 496 240 488.822 240 480V384C240 375.178 247.178 368 256 368H384C392.822 368 400 375.178 400 384V480ZM608 352H480C462.326 352 448 366.326 448 384V480C448 497.672 462.326 512 480 512H608C625.674 512 640 497.672 640 480V384C640 366.326 625.674 352 608 352ZM624 480C624 488.822 616.822 496 608 496H480C471.178 496 464 488.822 464 480V384C464 375.178 471.178 368 480 368H608C616.822 368 624 375.178 624 384V480ZM160 352H32C14.326 352 0 366.326 0 384V480C0 497.672 14.326 512 32 512H160C177.674 512 192 497.672 192 480V384C192 366.326 177.674 352 160 352ZM176 480C176 488.822 168.822 496 160 496H32C23.178 496 16 488.822 16 480V384C16 375.178 23.178 368 32 368H160C168.822 368 176 375.178 176 384V480ZM96 328C100.406 328 104 324.406 104 320V256C104 242.781 114.781 232 128 232H312V320C312 324.406 315.594 328 320 328S328 324.406 328 320V232H512C525.219 232 536 242.781 536 256V320C536 324.406 539.594 328 544 328S552 324.406 552 320V256C552 233.938 534.062 216 512 216H328V160H384C401.674 160 416 145.672 416 128V32C416 14.326 401.674 0 384 0H256C238.326 0 224 14.326 224 32V128C224 145.672 238.326 160 256 160H312V216H128C105.938 216 88 233.938 88 256V320C88 324.406 91.594 328 96 328ZM256 144C247.178 144 240 136.822 240 128V32C240 23.178 247.178 16 256 16H384C392.822 16 400 23.178 400 32V128C400 136.822 392.822 144 384 144H256Z" })
  }
));
SitemapThin.displayName = "SitemapThin";
var Sitemap_default = SitemapThin;
