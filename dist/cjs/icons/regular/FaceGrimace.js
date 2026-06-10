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
var FaceGrimace_exports = {};
__export(FaceGrimace_exports, {
  default: () => FaceGrimace_default
});
module.exports = __toCommonJS(FaceGrimace_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceGrimaceRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336.043 240C353.723 240 368.012 225.75 368.012 208S353.723 176 336.043 176C318.242 176 303.953 190.25 303.953 208S318.242 240 336.043 240ZM175.957 240C193.758 240 208.047 225.75 208.047 208S193.758 176 175.957 176C158.277 176 143.988 190.25 143.988 208S158.277 240 175.957 240ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM335.953 272H176C149.516 272 128.047 293.469 128.047 319.953V336C128.047 362.51 149.537 384 176.047 384H335.953C362.463 384 383.953 362.51 383.953 336V320C383.953 293.49 362.463 272 335.953 272ZM184 352H176.047C167.225 352 160.047 344.822 160.047 336V319.953C160.047 311.156 167.203 304 176 304H184V352ZM240 352H216V304H240V352ZM296 352H272V304H296V352ZM351.953 336C351.953 344.822 344.775 352 335.953 352H328V304H335.953C344.775 304 351.953 311.178 351.953 320V336Z" })
  }
));
FaceGrimaceRegular.displayName = "FaceGrimaceRegular";
var FaceGrimace_default = FaceGrimaceRegular;
