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
var Tally_exports = {};
__export(Tally_exports, {
  default: () => Tally_default
});
module.exports = __toCommonJS(Tally_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TallyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M623.399 182.844L535.995 211.191V456C535.995 469.25 525.245 480 511.995 480C498.747 480 487.997 469.25 487.997 456V226.76L407.998 252.705V456C407.998 469.25 397.248 480 383.998 480S359.998 469.25 359.998 456V268.273L280.002 294.219V456C280.002 469.25 269.252 480 256.002 480S232.002 469.25 232.002 456V309.787L152.004 335.732V456C152.004 469.25 141.254 480 128.006 480C114.756 480 104.006 469.25 104.006 456V351.301L31.414 374.844C28.946 375.625 26.446 376 24.008 376C13.883 376 4.477 369.562 1.164 359.406C-2.898 346.781 4.008 333.25 16.602 329.156L104.006 300.809V56C104.006 42.75 114.756 32 128.006 32C141.254 32 152.004 42.75 152.004 56V285.24L232.002 259.295V56C232.002 42.75 242.752 32 256.002 32S280.002 42.75 280.002 56V243.727L359.998 217.781V56C359.998 42.75 370.748 32 383.998 32S407.998 42.75 407.998 56V202.213L487.997 176.268V56C487.997 42.75 498.747 32 511.995 32C525.245 32 535.995 42.75 535.995 56V160.699L608.586 137.156C621.305 133.125 634.711 140 638.836 152.594C642.899 165.219 635.993 178.75 623.399 182.844Z" })
  }
));
TallyRegular.displayName = "TallyRegular";
var Tally_default = TallyRegular;
