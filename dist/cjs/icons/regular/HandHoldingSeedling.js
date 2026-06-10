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
var HandHoldingSeedling_exports = {};
__export(HandHoldingSeedling_exports, {
  default: () => HandHoldingSeedling_default
});
module.exports = __toCommonJS(HandHoldingSeedling_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandHoldingSeedlingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M250.785 192H264.037V232C264.037 245.2 274.839 256 288.04 256H288.041C301.242 256 312.044 245.2 312.044 232V192H325.296C410.683 192 480.068 116.625 480.068 24V24C480.068 10.745 469.321 0 456.064 0H418.809C363.551 0 315.419 31.75 288.04 79C260.662 31.75 212.53 0 157.272 0H120.017C106.76 0 96.014 10.745 96.014 24V24C96.014 116.625 165.398 192 250.785 192ZM418.809 48H429.935C420.059 102.75 376.928 144 325.421 144H314.294C324.171 89.25 367.302 48 418.809 48ZM157.272 48C208.779 48 251.91 89.25 261.787 144H250.66C199.153 144 156.022 102.75 146.146 48H157.272ZM551.953 312C520.823 285.625 482.693 295.875 463.565 310.25L403.182 355.75H399.806C399.681 317.75 369.302 287.875 330.672 287.875H186.651C158.272 287.875 130.268 297.25 108.14 314.25L79.761 336H24.003C10.802 336 0 346.8 0 360V360C0 373.2 10.802 384 24.003 384H96.014L137.269 352.5C151.271 341.75 168.774 336 186.776 336H330.797C358.675 336 359.801 376.25 329.671 376.25H269.788C262.287 376.25 256.036 382.375 256.036 390V390.125C256.036 397.75 262.287 403.875 269.788 403.875H404.395C414.106 403.875 423.553 400.716 431.311 394.875L492.569 348.75C500.82 342.625 513.072 342.125 520.948 348.75C531.075 357.25 530.325 371.875 520.073 379.5L419.434 455C411.683 460.75 402.307 464 392.555 464H24.003C10.802 464 0 474.8 0 488V488C0 501.2 10.802 512 24.003 512H392.805C412.808 512 432.186 505.5 448.063 493.5L548.827 417.625C565.455 405.125 575.331 386.125 575.956 365.625C576.706 345.125 567.83 325.5 551.953 312Z" })
  }
));
HandHoldingSeedlingRegular.displayName = "HandHoldingSeedlingRegular";
var HandHoldingSeedling_default = HandHoldingSeedlingRegular;
