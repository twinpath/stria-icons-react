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
var TruckPlow_exports = {};
__export(TruckPlow_exports, {
  default: () => TruckPlow_default
});
module.exports = __toCommonJS(TruckPlow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckPlowThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M579.219 422.391C557.156 405.875 544 379.562 544 352V224C544 196.438 557.156 170.125 579.219 153.609L636.812 110.406C640.344 107.75 641.062 102.734 638.406 99.203C635.719 95.672 630.719 94.969 627.188 97.594L569.594 140.797C543.562 160.328 528 191.422 528 224V336H496V248C496 208.297 463.688 176 424 176H395.758L287.625 46.359C280 37.234 268.812 32 256.938 32H168C145.938 32 128 49.938 128 72V176H40C17.938 176 0 193.938 0 216V312C0 333.355 16.918 350.494 38.004 351.596C34.34 361.762 32 372.57 32 384C32 437.02 74.98 480 128 480S224 437.02 224 384C224 372.719 221.695 362.055 218.121 352H293.879C290.305 362.055 288 372.719 288 384C288 437.02 330.98 480 384 480S480 437.02 480 384C480 372.719 477.695 362.055 474.121 352H528C528 384.578 543.562 415.672 569.594 435.203L627.188 478.406C628.625 479.484 630.312 480 632 480C634.438 480 636.812 478.891 638.406 476.797C641.062 473.266 640.344 468.25 636.812 465.594L579.219 422.391ZM144 72C144 58.766 154.781 48 168 48H256.938C264.062 48 270.781 51.141 275.344 56.625L374.898 176H144V72ZM128 464C83.889 464 48 428.111 48 384C48 339.887 83.889 304 128 304S208 339.887 208 384C208 428.111 172.111 464 128 464ZM384 464C339.889 464 304 428.111 304 384C304 339.887 339.889 304 384 304S464 339.887 464 384C464 428.111 428.111 464 384 464ZM466.686 336C450.055 307.426 419.443 288 384 288S317.945 307.426 301.314 336H210.686C194.055 307.426 163.443 288 128 288S61.945 307.426 45.314 336H40C26.781 336 16 325.234 16 312V216C16 202.766 26.781 192 40 192H424C454.875 192 480 217.125 480 248V336H466.686Z" })
  }
));
TruckPlowThin.displayName = "TruckPlowThin";
var TruckPlow_default = TruckPlowThin;
