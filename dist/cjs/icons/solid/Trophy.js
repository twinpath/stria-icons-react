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
var Trophy_exports = {};
__export(Trophy_exports, {
  default: () => Trophy_default
});
module.exports = __toCommonJS(Trophy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrophySolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M572.088 82.375C569.463 71.594 559.838 64 548.745 64H447.854C448.096 51.547 448.02 40.305 447.756 30.977C447.266 13.633 433.098 0 415.751 0H160.249C142.902 0 128.734 13.633 128.244 30.977C127.98 40.305 127.904 51.547 128.146 64H27.255C16.162 64 6.537 71.594 3.912 82.375C3.1 85.781 -15.713 167.188 37.068 245.906C74.512 301.727 137.626 340.934 224.585 363.273C243.284 368.078 256.001 385.492 256.001 404.801C256.001 428.66 236.659 448 212.8 448H208.002C181.492 448 160.003 469.492 160.003 496C160.003 504.836 167.167 512 176.002 512H399.998C408.833 512 415.997 504.836 415.997 496C415.997 469.492 394.508 448 367.998 448H363.2C339.341 448 319.999 428.66 319.999 404.801C319.999 385.492 332.716 368.078 351.415 363.273C438.374 340.934 501.488 301.727 538.932 245.906C591.713 167.188 572.9 85.781 572.088 82.375ZM77.411 219.844C49.474 178.625 47.005 135.656 48.38 112H128.806C134.165 171.617 149.126 243.961 186.44 301.062C137.355 281.594 100.85 254.445 77.411 219.844ZM498.589 219.844C475.15 254.445 438.645 281.594 389.56 301.062C426.874 243.961 441.835 171.617 447.194 112H527.62C528.995 135.688 526.526 178.656 498.589 219.844Z" })
  }
));
TrophySolid.displayName = "TrophySolid";
var Trophy_default = TrophySolid;
