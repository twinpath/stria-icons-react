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
var NairaSign_exports = {};
__export(NairaSign_exports, {
  default: () => NairaSign_default
});
module.exports = __toCommonJS(NairaSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NairaSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 256H384V72C384 49.906 366.094 32 344 32S304 49.906 304 72V256H271.756L137.5 50.156C127.844 35.344 109.625 28.625 92.594 33.656C75.625 38.688 64 54.312 64 72V256H32C14.312 256 0 270.312 0 288S14.312 320 32 320H64V440C64 462.094 81.906 480 104 480S144 462.094 144 440V320H217.986L310.5 461.844C318.031 473.375 330.75 480 344 480C347.781 480 351.625 479.469 355.406 478.344C372.375 473.312 384 457.688 384 440V320H416C433.688 320 448 305.688 448 288S433.688 256 416 256ZM144 256V206.562L176.244 256H144Z" })
  }
));
NairaSignSolid.displayName = "NairaSignSolid";
var NairaSign_default = NairaSignSolid;
