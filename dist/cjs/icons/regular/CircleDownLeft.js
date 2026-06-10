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
var CircleDownLeft_exports = {};
__export(CircleDownLeft_exports, {
  default: () => CircleDownLeft_default
});
module.exports = __toCommonJS(CircleDownLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleDownLeftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.166 205.09C361.535 195.719 361.535 180.516 352.166 171.148L340.854 159.836C331.484 150.465 316.281 150.465 306.912 159.836L242.342 224.406L200.969 183.031C196.375 178.438 190.234 176 184 176C180.906 176 177.781 176.594 174.812 177.812C165.844 181.531 160 190.281 160 200V328C160 341.25 170.75 352 184 352H312C321.703 352 330.453 346.156 334.172 337.188S335.828 317.906 328.969 311.031L287.596 269.656L352.166 205.09ZM496 256C496 123.453 388.549 16 256 16S16 123.453 16 256S123.451 496 256 496S496 388.547 496 256ZM448 256C448 361.867 361.869 448 256 448S64 361.867 64 256S150.131 64 256 64S448 150.133 448 256Z" })
  }
));
CircleDownLeftRegular.displayName = "CircleDownLeftRegular";
var CircleDownLeft_default = CircleDownLeftRegular;
