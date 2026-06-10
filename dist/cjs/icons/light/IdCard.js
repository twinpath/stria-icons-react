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
var IdCard_exports = {};
__export(IdCard_exports, {
  default: () => IdCard_default
});
module.exports = __toCommonJS(IdCard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IdCardLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 352H480C488.836 352 496 344.836 496 336S488.836 320 480 320H352C343.164 320 336 327.164 336 336S343.164 352 352 352ZM512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.348 480 576 451.346 576 416V96C576 60.652 547.348 32 512 32ZM544 416C544 433.645 529.645 448 512 448H64C46.355 448 32 433.645 32 416V128H544V416ZM32 96C32 78.355 46.355 64 64 64H512C529.645 64 544 78.355 544 96H32ZM352 224H480C488.836 224 496 216.836 496 208S488.836 192 480 192H352C343.164 192 336 199.164 336 208S343.164 224 352 224ZM352 288H480C488.836 288 496 280.836 496 272S488.836 256 480 256H352C343.164 256 336 263.164 336 272S343.164 288 352 288ZM192 288C227.346 288 256 259.346 256 224S227.346 160 192 160S128 188.654 128 224S156.654 288 192 288ZM192 192C209.645 192 224 206.355 224 224S209.645 256 192 256S160 241.645 160 224S174.355 192 192 192ZM96 416C104.836 416 112 408.836 112 400C112 373.49 133.49 352 160 352H224C250.51 352 272 373.49 272 400C272 408.836 279.164 416 288 416S304 408.836 304 400C304 355.816 268.184 320 224 320H160C115.816 320 80 355.816 80 400C80 408.836 87.164 416 96 416Z" })
  }
));
IdCardLight.displayName = "IdCardLight";
var IdCard_default = IdCardLight;
