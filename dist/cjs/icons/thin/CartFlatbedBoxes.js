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
var CartFlatbedBoxes_exports = {};
__export(CartFlatbedBoxes_exports, {
  default: () => CartFlatbedBoxes_default
});
module.exports = __toCommonJS(CartFlatbedBoxes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CartFlatbedBoxesThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M632 416H128V72C128 29.594 101.688 0 64 0H8C3.594 0 0 3.594 0 8S3.594 16 8 16H64C97.156 16 112 44.125 112 72V424C112 428.406 115.594 432 120 432H172.461C164.797 440.506 160 451.65 160 464C160 490.51 181.492 512 208 512S256 490.51 256 464C256 451.65 251.203 440.506 243.543 432H460.461C452.797 440.506 448 451.65 448 464C448 490.51 469.492 512 496 512S544 490.51 544 464C544 451.65 539.203 440.506 531.543 432H632C636.406 432 640 428.406 640 424S636.406 416 632 416ZM208 496C190.355 496 176 481.645 176 464S190.355 432 208 432S240 446.355 240 464S225.645 496 208 496ZM496 496C478.355 496 464 481.645 464 464S478.355 432 496 432S528 446.355 528 464S513.645 496 496 496ZM224 352H352C369.674 352 384 337.674 384 320V96C384 78.326 369.674 64 352 64H224C206.326 64 192 78.326 192 96V320C192 337.674 206.326 352 224 352ZM208 96C208 87.178 215.178 80 224 80H352C360.822 80 368 87.178 368 96V320C368 328.822 360.822 336 352 336H224C215.178 336 208 328.822 208 320V96ZM448 352H576C593.672 352 608 337.674 608 320V256C608 238.326 593.672 224 576 224H448C430.326 224 416 238.326 416 256V320C416 337.674 430.326 352 448 352ZM432 256C432 247.178 439.178 240 448 240H576C584.824 240 592 247.178 592 256V320C592 328.822 584.824 336 576 336H448C439.178 336 432 328.822 432 320V256ZM448 192H512C529.674 192 544 177.674 544 160V96C544 78.326 529.674 64 512 64H448C430.326 64 416 78.326 416 96V160C416 177.674 430.326 192 448 192ZM432 96C432 87.178 439.178 80 448 80H512C520.822 80 528 87.178 528 96V160C528 168.822 520.822 176 512 176H448C439.178 176 432 168.822 432 160V96Z" })
  }
));
CartFlatbedBoxesThin.displayName = "CartFlatbedBoxesThin";
var CartFlatbedBoxes_default = CartFlatbedBoxesThin;
