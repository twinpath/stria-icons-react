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
var Caravan_exports = {};
__export(Caravan_exports, {
  default: () => Caravan_default
});
module.exports = __toCommonJS(Caravan_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CaravanThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 128H352C334.326 128 320 142.326 320 160V320C320 337.674 334.326 352 352 352H416C433.674 352 448 337.674 448 320V160C448 142.326 433.674 128 416 128ZM432 224H392C387.578 224 384 227.578 384 232S387.578 240 392 240H432V320C432 328.822 424.822 336 416 336H352C343.178 336 336 328.822 336 320V160C336 151.178 343.178 144 352 144H416C424.822 144 432 151.178 432 160V224ZM632 400H571.096C573.932 395.223 576 389.957 576 384V192C576 103.635 504.365 32 416 32H64C28.654 32 0 60.654 0 96V352C0 387.346 28.654 416 64 416H96C96 469.02 138.98 512 192 512S288 469.02 288 416H632C636.422 416 640 412.422 640 408S636.422 400 632 400ZM192 496C147.889 496 112 460.111 112 416S147.889 336 192 336S272 371.889 272 416S236.111 496 192 496ZM560 384C560 392.822 552.822 400 544 400H286.387C278.734 354.637 239.539 320 192 320S105.266 354.637 97.613 400H64C37.533 400 16 378.467 16 352V96C16 69.533 37.533 48 64 48H416C495.402 48 560 112.598 560 192V384ZM224 128H96C78.326 128 64 142.326 64 160V224C64 241.674 78.326 256 96 256H224C241.674 256 256 241.674 256 224V160C256 142.326 241.674 128 224 128ZM240 224C240 232.822 232.822 240 224 240H96C87.178 240 80 232.822 80 224V160C80 151.178 87.178 144 96 144H224C232.822 144 240 151.178 240 160V224Z" })
  }
));
CaravanThin.displayName = "CaravanThin";
var Caravan_default = CaravanThin;
