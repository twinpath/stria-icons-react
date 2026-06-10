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
var QuidditchBroomBall_exports = {};
__export(QuidditchBroomBall_exports, {
  default: () => QuidditchBroomBall_default
});
module.exports = __toCommonJS(QuidditchBroomBall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const QuidditchBroomBallDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496.244 352C452.062 352 416.244 387.816 416.244 432S452.062 512 496.244 512C540.428 512 576.244 476.184 576.244 432S540.428 352 496.244 352ZM636.756 31.012L617.004 6.014C611.504 -0.861 601.504 -1.986 594.504 3.389L362 181.252L401.752 231.375L634.254 53.51C641.131 48.01 642.254 37.887 636.756 31.012Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M93.252 257.748C71.252 275.246 53.002 313.494 38.627 355.242L99.002 333.119C104.752 330.994 109.627 337.869 105.627 342.617L11 454.736C3.75 487.109 0 510.232 0 510.232S206.754 523.732 266.629 476.109C326.631 428.363 343.256 325.994 343.256 325.994L256.504 216.75C256.504 216.75 153.129 209.875 93.252 257.748ZM327.756 138.256C322.631 131.881 312.631 133.131 309.131 140.506L283.756 195.127L370.506 304.246L429.258 291.871C437.258 290.246 440.758 280.746 435.633 274.246L327.756 138.256Z" })
    ]
  }
));
QuidditchBroomBallDuotone.displayName = "QuidditchBroomBallDuotone";
var QuidditchBroomBall_default = QuidditchBroomBallDuotone;
