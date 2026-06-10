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
var Manhole_exports = {};
__export(Manhole_exports, {
  default: () => Manhole_default
});
module.exports = __toCommonJS(Manhole_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ManholeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.359 99.17C285.693 115.277 272.549 128 256 128S226.307 115.277 224.641 99.17C151.391 113.797 96 178.514 96 256S151.391 398.203 224.641 412.83C226.307 396.721 239.451 384 256 384S285.693 396.721 287.359 412.83C360.609 398.203 416 333.486 416 256S360.609 113.797 287.359 99.17ZM208 336H176V304H208V336ZM208 272H176V240H208V272ZM208 208H176V176H208V208ZM272 336H240V304H272V336ZM272 272H240V240H272V272ZM272 208H240V176H272V208ZM336 336H304V304H336V336ZM336 272H304V240H336V272ZM336 208H304V176H336V208Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C149.961 448 64 362.039 64 256S149.961 64 256 64S448 149.961 448 256S362.039 448 256 448Z" })
    ]
  }
));
ManholeDuotone.displayName = "ManholeDuotone";
var Manhole_default = ManholeDuotone;
