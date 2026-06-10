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
var HandHoldingDroplet_exports = {};
__export(HandHoldingDroplet_exports, {
  default: () => HandHoldingDroplet_default
});
module.exports = __toCommonJS(HandHoldingDroplet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandHoldingDropletRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M551.953 312C520.824 285.625 482.693 295.875 463.564 310.25L403.182 355.75H399.807C399.682 317.75 369.303 287.875 330.672 287.875H186.65C158.271 287.875 130.268 297.25 108.141 314.25L79.762 336H24.004C10.801 336 0 346.799 0 360C0 373.199 10.801 384 24.004 384H96.014L137.27 352.5C151.271 341.75 168.773 336 186.775 336H330.797C358.676 336 359.801 376.25 329.672 376.25H269.787C262.287 376.25 256.035 382.375 256.035 390V390.125C256.035 397.75 262.287 403.875 269.787 403.875H404.395C414.105 403.875 423.553 400.715 431.311 394.875L492.568 348.75C500.82 342.625 513.072 342.125 520.949 348.75C531.074 357.25 530.324 371.875 520.072 379.5L419.434 455C411.684 460.75 402.307 464 392.555 464H24.004C10.801 464 0 474.799 0 488C0 501.199 10.801 512 24.004 512H392.805C412.809 512 432.186 505.5 448.062 493.5L548.828 417.625C565.455 405.125 575.33 386.125 575.955 365.625C576.707 345.125 567.83 325.5 551.953 312ZM288 256C341 256 384 213.875 384 162C384 122 326.875 41.25 300.75 6.375C297.625 2.125 292.75 0 288 0S278.375 2.125 275.25 6.375C249.125 41.25 192 122 192 162C192 213.875 235 256 288 256ZM288 70.875C322 120.75 335.5 152 336 162C336 187.375 314.5 208 288 208S240 187.375 240 162.25C240.5 152.125 254 120.75 288 70.875Z" })
  }
));
HandHoldingDropletRegular.displayName = "HandHoldingDropletRegular";
var HandHoldingDroplet_default = HandHoldingDropletRegular;
