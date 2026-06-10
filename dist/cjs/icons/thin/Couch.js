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
var Couch_exports = {};
__export(Couch_exports, {
  default: () => Couch_default
});
module.exports = __toCommonJS(Couch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CouchThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 224C540.654 224 512 252.654 512 288H128C128 252.654 99.346 224 64 224S0 252.654 0 288V448C0 465.674 14.326 480 32 480H96C113.674 480 128 465.674 128 448V432H512V448C512 465.674 526.326 480 544 480H608C625.674 480 640 465.674 640 448V288C640 252.654 611.346 224 576 224ZM112 448C112 456.822 104.822 464 96 464H32C23.178 464 16 456.822 16 448V288C16 261.533 37.533 240 64 240S112 261.533 112 288V448ZM512 416H128V304H512V416ZM624 448C624 456.822 616.822 464 608 464H544C535.178 464 528 456.822 528 448V288C528 261.533 549.533 240 576 240S624 261.533 624 288V448ZM72 192C76.418 192 80 188.418 80 184V160C80 98.145 130.145 48 192 48H448C509.855 48 560 98.145 560 160V184C560 188.418 563.582 192 568 192S576 188.418 576 184V160C576 89.307 518.693 32 448 32H192C121.307 32 64 89.307 64 160V184C64 188.418 67.582 192 72 192Z" })
  }
));
CouchThin.displayName = "CouchThin";
var Couch_default = CouchThin;
