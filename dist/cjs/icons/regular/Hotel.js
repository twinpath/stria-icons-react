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
var Hotel_exports = {};
__export(Hotel_exports, {
  default: () => Hotel_default
});
module.exports = __toCommonJS(Hotel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HotelRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M236.75 256H275.25C281.625 256 288 249.625 288 243.25V204.75C288 198.375 281.625 192 275.25 192H236.75C230.375 192 224 198.375 224 204.75V243.25C224 249.625 230.375 256 236.75 256ZM332.75 160H371.25C377.625 160 384 153.625 384 147.25V108.75C384 102.375 377.625 96 371.25 96H332.75C326.375 96 320 102.375 320 108.75V147.25C320 153.625 326.375 160 332.75 160ZM332.75 256H371.25C377.625 256 384 249.625 384 243.25V204.75C384 198.375 377.625 192 371.25 192H332.75C326.375 192 320 198.375 320 204.75V243.25C320 249.625 326.375 256 332.75 256ZM236.75 160H275.25C281.625 160 288 153.625 288 147.25V108.75C288 102.375 281.625 96 275.25 96H236.75C230.375 96 224 102.375 224 108.75V147.25C224 153.625 230.375 160 236.75 160ZM488 464H480V48H488C501.254 48 512 37.254 512 24C512 10.744 501.254 0 488 0H24C10.746 0 0 10.744 0 24C0 37.254 10.746 48 24 48H32V464H24C10.746 464 0 474.744 0 488C0 501.254 10.746 512 24 512H488C501.254 512 512 501.254 512 488C512 474.744 501.254 464 488 464ZM432 464H304V384H334.373C344.172 384 352.104 375.189 350.23 365.57C341.631 321.381 302.697 288 256 288S170.369 321.381 161.77 365.57C159.896 375.189 167.828 384 177.627 384H208V464H80V48H432V464ZM140.75 256H179.25C185.625 256 192 249.625 192 243.25V204.75C192 198.375 185.625 192 179.25 192H140.75C134.375 192 128 198.375 128 204.75V243.25C128 249.625 134.375 256 140.75 256ZM140.75 160H179.25C185.625 160 192 153.625 192 147.25V108.75C192 102.375 185.625 96 179.25 96H140.75C134.375 96 128 102.375 128 108.75V147.25C128 153.625 134.375 160 140.75 160Z" })
  }
));
HotelRegular.displayName = "HotelRegular";
var Hotel_default = HotelRegular;
