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
var BoxBallot_exports = {};
__export(BoxBallot_exports, {
  default: () => BoxBallot_default
});
module.exports = __toCommonJS(BoxBallot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxBallotRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M520 160H480V208H520C524.406 208 528 211.594 528 216V320H48V216C48 211.594 51.594 208 56 208H96V160H56C25.125 160 0 185.125 0 216V456C0 486.875 25.125 512 56 512H520C550.875 512 576 486.875 576 456V216C576 185.125 550.875 160 520 160ZM528 456C528 460.406 524.406 464 520 464H56C51.594 464 48 460.406 48 456V368H528V456ZM160 256H416C433.674 256 448 241.672 448 224V32C448 14.328 433.674 0 416 0H160C142.328 0 128 14.328 128 32V224C128 241.672 142.328 256 160 256ZM176 48H400V208H176V48Z" })
  }
));
BoxBallotRegular.displayName = "BoxBallotRegular";
var BoxBallot_default = BoxBallotRegular;
