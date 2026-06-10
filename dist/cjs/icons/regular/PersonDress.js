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
var PersonDress_exports = {};
__export(PersonDress_exports, {
  default: () => PersonDress_default
});
module.exports = __toCommonJS(PersonDress_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonDressRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 96C186.5 96 208 74.5 208 48S186.5 0 160 0C133.502 0 112.002 21.5 112.002 48S133.502 96 160 96ZM308.685 275.828L247.248 171.375C231.498 144.625 202.437 128 171.406 128H148.593C117.564 128 88.502 144.625 72.752 171.375L11.316 275.828C4.597 287.25 8.41 301.969 19.847 308.688C23.66 310.934 27.837 312 31.964 312C40.185 312 48.195 307.766 52.689 300.172L106.361 208.922L48.002 384H96.002V488C96.002 501.254 106.746 512 120.002 512S144 501.254 144 488V384H176V488C176 501.254 186.744 512 200 512S224 501.254 224 488V384H271.998L213.64 208.922L267.31 300.172C271.779 307.766 279.779 312 288.029 312C292.154 312 296.341 310.938 300.154 308.688C311.591 301.969 315.404 287.25 308.685 275.828ZM114.597 336L151.898 224.1L160 199.791L168.103 224.1L205.402 336H114.597Z" })
  }
));
PersonDressRegular.displayName = "PersonDressRegular";
var PersonDress_default = PersonDressRegular;
