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
var ShoePrints_exports = {};
__export(ShoePrints_exports, {
  default: () => ShoePrints_default
});
module.exports = __toCommonJS(ShoePrints_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShoePrintsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M337.5 272C302.5 272 261.25 286 232.75 306.25C208 323.875 188.25 340.625 128 340.625H64C28.625 340.625 0 371.25 0 409.125S28.625 480 64 480H128L185.5 494.875C217.375 504.25 250.125 512 293.25 512C403.875 512 512 456.875 512 374.875C512 306.25 427.875 272 337.5 272ZM112 448H64C47 448 32 429.875 32 409.125C32 389 46.375 372.625 64 372.625H112V448ZM193.5 463.875L144 451.125V372C199.375 369 224.75 351.25 247.125 335.375C338.375 270.375 480 316.75 480 374.875C480 437 358.5 512.75 193.5 463.875ZM421.25 0C377.875 0 345.125 7.75 313.5 17.125L256 32H192C156.625 32 128 65 128 102.875S156.625 171.375 192 171.375H256C316.25 171.375 336 188.125 360.75 205.75C389.25 226 430.5 240 465.5 240C555.875 240 640 205.75 640 137.125C640 55.875 533.125 0 421.25 0ZM240 139.375H192C174.375 139.375 160 123 160 102.875C160 82.125 175 64 192 64H240V139.375ZM465.5 208C437.875 208 403.25 196.625 379.25 179.625C355.5 162.75 330.5 143.125 272 140V60.875L322.625 47.875C352 39.125 381.75 32 421.25 32C473.375 32 608 58 608 137.125C608 183.625 536.25 208 465.5 208Z" })
  }
));
ShoePrintsLight.displayName = "ShoePrintsLight";
var ShoePrints_default = ShoePrintsLight;
