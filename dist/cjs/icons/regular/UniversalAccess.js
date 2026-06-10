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
var UniversalAccess_exports = {};
__export(UniversalAccess_exports, {
  default: () => UniversalAccess_default
});
module.exports = __toCommonJS(UniversalAccess_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UniversalAccessRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M391.078 193.406C387.422 180.656 374.109 173.156 361.406 176.938L302.156 193.875C271.99 202.498 240.01 202.498 209.844 193.875L150.594 176.938C137.891 173.188 124.562 180.656 120.922 193.406S124.656 219.438 137.406 223.062L196.656 240.031C200.395 241.096 204.215 241.637 208 242.424V288.719L177.359 376.062C172.969 388.562 179.547 402.25 192.047 406.656C194.688 407.562 197.359 408 200 408C209.906 408 219.188 401.812 222.641 391.938L248.486 321.287C251.049 314.285 260.951 314.285 263.514 321.287L289.359 391.938C292.812 401.812 302.094 408 312 408C314.641 408 317.312 407.562 319.953 406.656C332.453 402.25 339.031 388.562 334.641 376.062L304 288.719V242.402C307.783 241.615 311.607 241.072 315.344 240L374.594 223.062C387.344 219.438 394.719 206.156 391.078 193.406ZM256 176C278.092 176 296 158.092 296 136S278.092 96 256 96S216 113.908 216 136S233.908 176 256 176ZM256 16C123.42 16 16 123.418 16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" })
  }
));
UniversalAccessRegular.displayName = "UniversalAccessRegular";
var UniversalAccess_default = UniversalAccessRegular;
