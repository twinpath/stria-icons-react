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
var BookSkull_exports = {};
__export(BookSkull_exports, {
  default: () => BookSkull_default
});
module.exports = __toCommonJS(BookSkull_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookSkullSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 144C280.75 144 288 136.75 288 128S280.75 112 272 112S256 119.25 256 128S263.25 144 272 144ZM448 360V24C448 10.744 437.254 0 424 0H96C42.98 0 0 42.98 0 96V416C0 469.02 42.98 512 96 512H424C437.254 512 448 501.254 448 488V472C448 461.582 441.273 452.936 432 449.615V382.385C441.273 379.064 448 370.416 448 360ZM240 64C284.25 64 320 92.75 320 128C320 148.875 307.25 167.25 288 178.875V192C288 200.75 280.75 208 272 208H208C199.25 208 192 200.75 192 192V178.875C172.75 167.25 160 148.875 160 128C160 92.75 195.75 64 240 64ZM124.75 231.25L131.125 216.625C132.75 212.5 137.5 210.75 141.625 212.375L239.875 254.5L338.25 212.375C342.375 210.75 347.125 212.5 348.75 216.625L355.125 231.25C356.75 235.375 355 240.125 350.875 241.75L280.625 272L350.875 302.125C355 303.75 356.75 308.5 355.125 312.625L348.75 327.25C347.125 331.375 342.375 333.25 338.25 331.5L240 289.375L141.75 331.625C137.625 333.25 132.875 331.5 131.25 327.375L124.875 312.75C123.25 308.625 125 303.875 129.125 302.25L199.5 272.125L129 241.75C124.875 240.125 123.125 235.375 124.75 231.25ZM384 448H96C78.328 448 64 433.672 64 416C64 398.326 78.328 384 96 384H384V448ZM208 144C216.75 144 224 136.75 224 128S216.75 112 208 112S192 119.25 192 128S199.25 144 208 144Z" })
  }
));
BookSkullSolid.displayName = "BookSkullSolid";
var BookSkull_default = BookSkullSolid;
