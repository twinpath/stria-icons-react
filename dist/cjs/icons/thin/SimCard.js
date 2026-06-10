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
var SimCard_exports = {};
__export(SimCard_exports, {
  default: () => SimCard_default
});
module.exports = __toCommonJS(SimCard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SimCardThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0H64C28.75 0 0 28.75 0 64V448C0 483.25 28.75 512 64 512H320C355.25 512 384 483.25 384 448V128L256 0ZM368 448C368 474.467 346.467 496 320 496H64C37.533 496 16 474.467 16 448V64C16 37.533 37.533 16 64 16H249.373L368 134.627V448ZM64 224V416C64 433.75 78.25 448 96 448H288C305.75 448 320 433.75 320 416V224C320 206.25 305.75 192 288 192H96C78.25 192 64 206.25 64 224ZM144 432H96C87.027 432 80 424.971 80 416V368H144V432ZM224 432H160V368H224V432ZM304 416C304 424.971 296.973 432 288 432H240V368H304V416ZM304 352H80V288H304V352ZM240 208H288C296.973 208 304 215.027 304 224V272H240V208ZM160 208H224V272H160V208ZM144 272H80V224C80 215.027 87.027 208 96 208H144V272Z" })
  }
));
SimCardThin.displayName = "SimCardThin";
var SimCard_default = SimCardThin;
