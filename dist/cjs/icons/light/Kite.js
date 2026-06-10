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
var Kite_exports = {};
__export(Kite_exports, {
  default: () => Kite_default
});
module.exports = __toCommonJS(Kite_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KiteLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M592.009 0H361.009C338.946 0 319.79 14.969 314.415 36.375L225.136 393.49L138.978 475.25C131.946 482.188 123.853 479.563 121.571 478.656C119.259 477.688 111.728 473.781 111.728 463.906L111.89 316.178L167.79 349.719C170.353 351.281 173.196 352 176.009 352C181.415 352 186.728 349.219 189.728 344.219C194.29 336.656 191.821 326.812 184.228 322.281L127.093 288L184.228 253.719C191.821 249.187 194.29 239.344 189.728 231.781C185.196 224.187 175.29 221.719 167.79 226.281L111.952 259.783L112.009 208C112.009 163.875 76.134 128 32.009 128H16.009C7.165 128 0.009 135.156 0.009 144S7.165 160 16.009 160H32.009C58.478 160 80.009 181.531 80.009 208L79.952 259.717L24.228 226.281C16.759 221.719 6.853 224.188 2.29 231.781C-2.272 239.344 0.196 249.188 7.79 253.719L64.925 288L7.79 322.281C0.196 326.813 -2.272 336.656 2.29 344.219C5.29 349.219 10.603 352 16.009 352C18.821 352 21.665 351.281 24.228 349.719L79.89 316.322L79.728 463.906C79.728 483.625 91.04 500.594 109.259 508.188C115.415 510.75 121.759 512 128.009 512C140.29 512 152.196 507.188 161.478 498L249.993 414.004L603.634 325.594C625.04 320.219 640.009 301.062 640.009 279V48C640.009 21.531 618.478 0 592.009 0ZM585.384 32L480.009 137.375L374.634 32H585.384ZM344.685 47.301L457.384 160L269.55 347.834L344.685 47.301ZM292.175 370.459L480.009 182.625L592.708 295.324L292.175 370.459ZM608.009 265.375L502.634 160L608.009 54.625V265.375Z" })
  }
));
KiteLight.displayName = "KiteLight";
var Kite_default = KiteLight;
