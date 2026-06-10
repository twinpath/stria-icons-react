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
var ArrowDownToSquare_exports = {};
__export(ArrowDownToSquare_exports, {
  default: () => ArrowDownToSquare_default
});
module.exports = __toCommonJS(ArrowDownToSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownToSquareRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 128H344C330.746 128 320 138.742 320 152C320 165.254 330.746 176 344 176H384C392.836 176 400 183.164 400 192V448C400 456.836 392.836 464 384 464H64C55.164 464 48 456.836 48 448V192C48 183.164 55.164 176 64 176H104C117.254 176 128 165.254 128 152C128 138.742 117.254 128 104 128H64C28.654 128 0 156.652 0 192V448C0 483.344 28.654 512 64 512H384C419.346 512 448 483.344 448 448V192C448 156.652 419.346 128 384 128ZM111.719 238.633C101.969 247.609 101.375 262.805 110.375 272.562L206.375 376.633C215.438 386.453 232.563 386.453 241.625 376.633L337.625 272.562C346.625 262.805 346.031 247.609 336.281 238.633C326.5 229.562 311.313 230.219 302.375 239.977L248 298.922V24.016C248 10.758 237.25 0 224 0S200 10.758 200 24.016V298.922L145.625 239.977C140.906 234.848 134.469 232.25 128 232.25C122.188 232.25 116.344 234.348 111.719 238.633Z" })
  }
));
ArrowDownToSquareRegular.displayName = "ArrowDownToSquareRegular";
var ArrowDownToSquare_default = ArrowDownToSquareRegular;
