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
var ArrowUpFromSquare_exports = {};
__export(ArrowUpFromSquare_exports, {
  default: () => ArrowUpFromSquare_default
});
module.exports = __toCommonJS(ArrowUpFromSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpFromSquareRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 159.753H376C362.746 159.753 352 170.502 352 183.77C352 197.033 362.746 207.786 376 207.786H384C392.836 207.786 400 214.956 400 223.798V447.955C400 456.797 392.836 463.966 384 463.966H64C55.164 463.966 48 456.797 48 447.955V223.798C48 214.956 55.164 207.786 64 207.786H72C85.254 207.786 96 197.033 96 183.77C96 170.502 85.254 159.753 72 159.753H64C28.654 159.753 0 188.425 0 223.798V447.955C0 483.324 28.654 512 64 512H384C419.346 512 448 483.324 448 447.955V223.798C448 188.425 419.346 159.753 384 159.753ZM128.01 151.775C134.48 151.775 140.919 149.16 145.625 144.023L200 85.075V319.865C200 333.124 210.75 343.882 224 343.882S248 333.124 248 319.865V85.075L302.375 144.023C307.094 149.152 313.531 151.747 320 151.747C333.23 151.747 344.003 141.014 344.003 127.744C344.003 121.914 341.893 116.064 337.625 111.438L241.625 7.365C237.094 2.455 230.547 0 224 0S210.906 2.455 206.375 7.365L110.375 111.438C106.107 116.064 103.997 121.914 103.997 127.744C103.997 141.11 114.898 151.775 128.01 151.775Z " })
  }
));
ArrowUpFromSquareRegular.displayName = "ArrowUpFromSquareRegular";
var ArrowUpFromSquare_default = ArrowUpFromSquareRegular;
