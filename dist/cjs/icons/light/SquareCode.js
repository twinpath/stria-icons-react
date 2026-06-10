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
var SquareCode_exports = {};
__export(SquareCode_exports, {
  default: () => SquareCode_default
});
module.exports = __toCommonJS(SquareCode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareCodeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM191.312 172.688C185.062 166.438 174.937 166.438 168.688 172.688L96.688 244.688C90.438 250.938 90.438 261.063 96.688 267.312L168.688 339.312C171.812 342.438 175.906 344 180 344S188.188 342.438 191.312 339.312C197.562 333.062 197.562 322.937 191.312 316.688L130.625 256L191.312 195.312C197.562 189.062 197.562 178.938 191.312 172.688ZM279.312 172.688C273.062 166.438 262.937 166.438 256.688 172.688S250.438 189.063 256.688 195.312L317.375 256L256.688 316.688C250.438 322.938 250.438 333.063 256.688 339.312C259.812 342.438 263.906 344 268 344S276.188 342.438 279.312 339.312L351.312 267.312C357.562 261.062 357.562 250.937 351.312 244.688L279.312 172.688Z" })
  }
));
SquareCodeLight.displayName = "SquareCodeLight";
var SquareCode_default = SquareCodeLight;
