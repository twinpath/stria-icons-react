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
var TruckMoving_exports = {};
__export(TruckMoving_exports, {
  default: () => TruckMoving_default
});
module.exports = __toCommonJS(TruckMoving_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckMovingThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M629.477 249.396L568.961 183.367C555.312 168.479 536.041 160 515.844 160H448V96C448 60.652 419.346 32 384 32H64C28.654 32 0 60.652 0 96V336C0 359.973 13.338 380.621 32.848 391.584C32.551 394.389 32 397.117 32 400C32 444.182 67.816 480 112 480C143.855 480 171.131 461.24 184 434.295C196.869 461.24 224.145 480 256 480C300.184 480 336 444.182 336 400H416C416 444.182 451.816 480 496 480S576 444.182 576 400H600C622.062 400 640 382.062 640 360V276.453C640 266.436 636.246 256.781 629.477 249.396ZM448 176H515.844C531.5 176 546.562 182.625 557.125 194.156L613.807 256H448V176ZM112 464C76.711 464 48 435.289 48 400C48 364.709 76.711 336 112 336S176 364.709 176 400C176 435.289 147.289 464 112 464ZM256 464C220.711 464 192 435.289 192 400C192 364.709 220.711 336 256 336S320 364.709 320 400C320 435.289 291.289 464 256 464ZM334.387 384C326.973 347.484 294.703 320 256 320C224.145 320 196.869 338.756 184 365.703C171.131 338.756 143.855 320 112 320C76.566 320 46.861 343.191 36.348 375.104C24.078 366.4 16 352.154 16 336V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V352.438C425.117 361.68 419.99 372.293 417.613 384H334.387ZM496 464C460.711 464 432 435.289 432 400C432 364.709 460.711 336 496 336S560 364.709 560 400C560 435.289 531.289 464 496 464ZM624 360C624 373.234 613.219 384 600 384H574.387C566.973 347.484 534.703 320 496 320C477.904 320 461.402 326.232 448 336.361V272H624V360Z" })
  }
));
TruckMovingThin.displayName = "TruckMovingThin";
var TruckMoving_default = TruckMovingThin;
