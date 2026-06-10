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
var Mosque_exports = {};
__export(Mosque_exports, {
  default: () => Mosque_default
});
module.exports = __toCommonJS(Mosque_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MosqueRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M622.25 275.75C633.375 260.75 640 243.125 640 224C640 171.125 591.75 135.25 538.5 106.25C474.68 71.302 438.24 28.423 416.912 7C407.617 -2.336 392.428 -2.334 383.137 7.005C361.824 28.427 325.316 71.304 261.5 106.25C242.25 116.625 223.875 128.125 208 140.75V120C208 55.498 140.393 14.8 114.197 2.304C107.754 -0.77 100.246 -0.77 93.803 2.304C67.607 14.8 0 55.498 0 120V488C0 501.253 10.746 512 24 512S48 501.253 48 488V192H160V488C160 501.253 170.746 512 184 512S208 501.253 208 488V320H592V488C592 501.253 602.746 512 616 512S640 501.253 640 488V304C640 291.5 632.625 281 622.25 275.75ZM160 144H48V120C48 90.75 80.5 66.25 104 53.125C126.75 65.875 160 90.375 160 120V144ZM529.25 272H270.75C236.75 272 208 250 208 224C208 200.875 232.25 176.875 284.5 148.25C329.875 123.5 368 97 400 68C432 97 470.125 123.5 515.5 148.25C567.75 176.875 592 200.875 592 224C592 250 563.25 272 529.25 272ZM284.766 384.16C268.15 385.806 256 400.765 256 417.46V488C256 501.253 266.746 512 280 512H296C309.254 512 320 501.253 320 488V416C320 397.306 303.832 382.271 284.766 384.16ZM400 352C400 352 352 376 352 424V488C352 501.253 362.746 512 376 512H424C437.254 512 448 501.253 448 488V424C448 376 400 352 400 352ZM508.766 384.16C492.15 385.806 480 400.765 480 417.46V488C480 501.253 490.746 512 504 512H520C533.254 512 544 501.253 544 488V416C544 397.306 527.832 382.271 508.766 384.16Z" })
  }
));
MosqueRegular.displayName = "MosqueRegular";
var Mosque_default = MosqueRegular;
