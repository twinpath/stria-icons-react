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
var AnglesLeft_exports = {};
__export(AnglesLeft_exports, {
  default: () => AnglesLeft_default
});
module.exports = __toCommonJS(AnglesLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnglesLeftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M202.705 84.104C196.143 78.197 186.018 78.729 180.111 85.291L36.102 245.281C30.633 251.406 30.633 260.594 36.102 266.719L180.111 426.709C186.018 433.271 196.143 433.803 202.705 427.896C209.254 421.959 209.77 411.865 203.893 405.271L69.525 256L203.893 106.729C209.488 100.498 209.623 90.375 202.705 84.104ZM261.525 256L395.893 106.729C401.488 100.498 401.623 90.375 394.705 84.104C388.143 78.197 378.018 78.729 372.111 85.291L228.102 245.281C222.633 251.406 222.633 260.594 228.102 266.719L372.111 426.709C378.018 433.271 388.143 433.803 394.705 427.896C401.254 421.959 401.77 411.865 395.893 405.271L261.525 256Z" })
  }
));
AnglesLeftLight.displayName = "AnglesLeftLight";
var AnglesLeft_default = AnglesLeftLight;
