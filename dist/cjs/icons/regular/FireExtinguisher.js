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
var FireExtinguisher_exports = {};
__export(FireExtinguisher_exports, {
  default: () => FireExtinguisher_default
});
module.exports = __toCommonJS(FireExtinguisher_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FireExtinguisherRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M503.375 5.562C497.922 1.031 490.766 -0.844 483.703 0.375L307.703 32.375C296.297 34.469 288 44.406 288 56H200V24C200 10.75 189.25 0 176 0S152 10.75 152 24V56H120C53.844 56 0 109.844 0 176C0 189.25 10.75 200 24 200S48 189.25 48 176C48 136.312 80.312 104 120 104H152V130.719C101.705 141.727 64 186.402 64 240V480C64 497.672 78.328 512 96 512H256C273.674 512 288 497.672 288 480V240C288 186.402 250.295 141.727 200 130.719V104H288C288 115.594 296.297 125.531 307.703 127.625L483.703 159.625C485.141 159.875 486.578 160 488 160C493.578 160 499.031 158.062 503.375 154.438C508.844 149.875 512 143.125 512 136V24C512 16.875 508.844 10.125 503.375 5.562ZM240 464H112V432H240V464ZM240 240V384H112V240C112 204.711 140.711 176 176 176C211.291 176 240 204.711 240 240Z" })
  }
));
FireExtinguisherRegular.displayName = "FireExtinguisherRegular";
var FireExtinguisher_default = FireExtinguisherRegular;
