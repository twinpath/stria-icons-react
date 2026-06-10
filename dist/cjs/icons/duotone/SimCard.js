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
const SimCardDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0H64C28.75 0 0 28.75 0 64V448C0 483.25 28.75 512 64 512H320C355.25 512 384 483.25 384 448V128L256 0ZM320 416C320 433.674 305.674 448 288 448H96C78.326 448 64 433.674 64 416V224C64 206.326 78.326 192 96 192H288C305.674 192 320 206.326 320 224V416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 416C64 433.75 78.25 448 96 448H128V384H64V416ZM128 192H96C78.25 192 64 206.25 64 224V256H128V192ZM224 192H160V256H224V192ZM160 448H224V384H160V448ZM288 192H256V256H320V224C320 206.25 305.75 192 288 192ZM64 352H320V288H64V352ZM256 448H288C305.75 448 320 433.75 320 416V384H256V448Z" })
    ]
  }
));
SimCardDuotone.displayName = "SimCardDuotone";
var SimCard_default = SimCardDuotone;
