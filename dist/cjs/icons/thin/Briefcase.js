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
var Briefcase_exports = {};
__export(Briefcase_exports, {
  default: () => Briefcase_default
});
module.exports = __toCommonJS(Briefcase_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BriefcaseThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 96H384V40C384 17.938 366.062 0 344 0H168C145.938 0 128 17.938 128 40V96H48C21.492 96 0 117.49 0 144V256V272V432C0 458.51 21.492 480 48 480H464C490.508 480 512 458.51 512 432V272V256V144C512 117.49 490.508 96 464 96ZM144 40C144 26.781 154.781 16 168 16H344C357.219 16 368 26.781 368 40V96H144V40ZM496 432C496 449.645 481.645 464 464 464H48C30.355 464 16 449.645 16 432V272H176V328C176 341.219 186.781 352 200 352H312C325.219 352 336 341.219 336 328V272H496V432ZM320 272V328C320 332.406 316.406 336 312 336H200C195.594 336 192 332.406 192 328V272H320ZM16 256V144C16 126.355 30.355 112 48 112H464C481.645 112 496 126.355 496 144V256H16Z" })
  }
));
BriefcaseThin.displayName = "BriefcaseThin";
var Briefcase_default = BriefcaseThin;
