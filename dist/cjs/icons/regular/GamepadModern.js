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
var GamepadModern_exports = {};
__export(GamepadModern_exports, {
  default: () => GamepadModern_default
});
module.exports = __toCommonJS(GamepadModern_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GamepadModernRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M638.574 338.375L611.074 157.125C603.324 106 565.45 65 515.575 53.75C386.826 24.75 253.076 24.75 124.327 53.75C74.452 65 36.578 106 28.828 157.125L1.453 338.375C-9.922 412.875 46.953 480 121.202 480H121.452C167.577 479.875 209.577 453.5 229.826 412L243.576 384H396.326L410.075 412C430.325 453.5 472.325 479.875 518.45 480H518.7C593.074 480 649.824 412.875 638.574 338.375ZM573.7 406.625C559.95 422.875 539.7 432.125 518.45 432C490.7 432 465.7 416.25 453.2 390.875L434.884 353.82C429.49 342.907 418.371 336 406.197 336H233.705C221.531 336 210.412 342.907 205.018 353.82L186.702 390.875C174.202 416.25 149.202 432 121.202 432C99.952 432.125 79.827 422.75 66.202 406.625C51.827 389.75 45.453 367.5 48.828 345.625L76.327 164.375C81.202 132.5 104.077 107.5 134.827 100.625C256.701 73.125 383.201 73.125 505.075 100.625C535.825 107.5 558.7 132.5 563.575 164.375L591.074 345.625C594.449 367.5 588.074 389.75 573.7 406.625ZM399.997 240C382.372 240 367.997 254.375 367.997 272S382.372 304 399.997 304S431.997 289.625 431.997 272S417.622 240 399.997 240ZM247.951 200H215.952V168C215.952 154.799 205.151 144 191.952 144C178.751 144 167.952 154.799 167.952 168V200H135.952C122.751 200 111.952 210.799 111.952 224C111.952 237.199 122.751 248 135.952 248H167.952V280C167.952 293.199 178.751 304 191.952 304C205.151 304 215.952 293.199 215.952 280V248H247.951C261.151 248 271.951 237.199 271.951 224C271.951 210.799 261.151 200 247.951 200ZM463.997 144C446.372 144 431.997 158.375 431.997 176S446.372 208 463.997 208C481.622 208 495.997 193.625 495.997 176S481.622 144 463.997 144Z" })
  }
));
GamepadModernRegular.displayName = "GamepadModernRegular";
var GamepadModern_default = GamepadModernRegular;
