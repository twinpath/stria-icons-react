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
var DeleteLeft_exports = {};
__export(DeleteLeft_exports, {
  default: () => DeleteLeft_default
});
module.exports = __toCommonJS(DeleteLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DeleteLeftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 64H205.25C188.25 64 172 70.75 160 82.75L9.375 233.375C-3.125 245.875 -3.125 266.125 9.375 278.625L160 429.25C172 441.25 188.25 448 205.25 448H512C547.375 448 576 419.375 576 384V128C576 92.625 547.375 64 512 64ZM544 384C544 401.645 529.645 416 512 416H205.25C196.709 416 188.676 412.67 182.629 406.621L32.004 256.002L182.629 105.377C188.676 99.33 196.709 96 205.25 96H512C529.645 96 544 110.355 544 128V384ZM427.312 180.688C421.062 174.438 410.937 174.438 404.687 180.688L352 233.375L299.312 180.688C293.062 174.438 282.937 174.438 276.687 180.688S270.437 197.063 276.687 203.312L329.375 256L276.687 308.688C270.437 314.938 270.437 325.063 276.687 331.312C282.934 337.559 293.059 337.566 299.312 331.312L352 278.625L404.687 331.312C410.934 337.559 421.059 337.566 427.312 331.312C433.562 325.062 433.562 314.937 427.312 308.688L374.625 256L427.312 203.312C433.562 197.062 433.562 186.938 427.312 180.688Z" })
  }
));
DeleteLeftLight.displayName = "DeleteLeftLight";
var DeleteLeft_default = DeleteLeftLight;
