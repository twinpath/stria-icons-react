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
var CartPlus_exports = {};
__export(CartPlus_exports, {
  default: () => CartPlus_default
});
module.exports = __toCommonJS(CartPlus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CartPlusDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M569.572 44.734C563.463 36.641 554.15 32 544.01 32H122L170.76 288H489.166C503.4 288 516.041 278.438 519.932 264.781L574.791 72.797C577.572 63.047 575.666 52.828 569.572 44.734ZM395.475 180.576H356.615V219.428C356.615 230.742 347.357 240 336.045 240H336.041C324.729 240 315.471 230.742 315.471 219.428V180.576H276.611C265.299 180.576 256.043 171.32 256.043 160.006C256.043 148.693 265.299 139.438 276.611 139.438H315.471V100.586C315.471 89.271 324.729 80.016 336.041 80.016H336.045C347.357 80.016 356.615 89.271 356.615 100.586V139.437H395.475C406.787 139.438 416.043 148.693 416.043 160.006C416.043 171.32 406.787 180.576 395.475 180.576Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 416C149.49 416 128 437.49 128 464S149.49 512 176 512S224 490.51 224 464S202.51 416 176 416ZM276.568 180.576H315.428V219.428C315.428 230.742 324.686 240 335.998 240H336.002C347.314 240 356.572 230.742 356.572 219.428V180.576H395.432C406.744 180.576 416 171.32 416 160.006C416 148.693 406.744 139.438 395.432 139.438H356.572V100.586C356.572 89.271 347.314 80.016 336.002 80.016H335.998C324.686 80.016 315.428 89.271 315.428 100.586V139.437H276.568C265.256 139.438 256 148.693 256 160.006C256 171.32 265.256 180.576 276.568 180.576ZM488 336H179.859L119.578 19.511C117.422 8.191 107.524 0 96 0H24C10.745 0 0 10.745 0 24V24C0 37.255 10.745 48 24 48H76.141L136.424 364.491C138.58 375.811 148.477 384 160 384H488C501.255 384 512 373.255 512 360V360C512 346.745 501.255 336 488 336ZM464 416C437.49 416 416 437.49 416 464S437.49 512 464 512S512 490.51 512 464S490.51 416 464 416Z" })
    ]
  }
));
CartPlusDuotone.displayName = "CartPlusDuotone";
var CartPlus_default = CartPlusDuotone;
