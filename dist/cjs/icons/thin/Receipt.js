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
var Receipt_exports = {};
__export(Receipt_exports, {
  default: () => Receipt_default
});
module.exports = __toCommonJS(Receipt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ReceiptThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400.02 0C396.746 0 393.387 1.021 390.375 3.289L352 48.031L297.625 3.289C294.75 1.102 291.375 0.008 288 0.008S281.25 1.102 278.375 3.289L224 48.031L169.625 3.289C166.75 1.102 163.375 0.008 160 0.008S153.25 1.102 150.375 3.289L96 48.031L57.625 3.289C54.615 1.023 51.254 0 47.982 0C39.705 0 32 6.541 32 16.037V495.963C32 505.457 39.705 512 47.982 512C51.254 512 54.615 510.979 57.625 508.711L96 463.969L150.375 508.711C153.25 510.898 156.625 511.992 160 511.992S166.75 510.898 169.625 508.711L224 463.969L278.375 508.711C281.25 510.898 284.625 511.992 288 511.992S294.75 510.898 297.625 508.711L352 463.969L390.375 508.711C393.35 510.977 396.697 512 399.965 512C408.232 512 416 505.459 416 495.963V16.037C416 6.543 408.295 0 400.02 0ZM364.145 453.553C360.984 449.867 356.504 447.969 351.992 447.969C348.412 447.969 344.811 449.166 341.834 451.613L288.541 496.355L234.166 451.613C231.213 449.184 227.607 447.969 224 447.969C220.395 447.969 216.787 449.184 213.834 451.613L160.541 496.355L106.166 451.613C103.191 449.164 99.59 447.969 96.008 447.969C91.496 447.969 87.016 449.867 83.855 453.553L48 495.355V16.645L83.855 58.447C87.016 62.133 91.496 64.031 96.008 64.031C99.59 64.031 103.191 62.834 106.166 60.387L159.459 15.645L213.834 60.387C216.787 62.816 220.395 64.031 224 64.031C227.607 64.031 231.213 62.816 234.166 60.387L287.459 15.645L341.834 60.387C344.811 62.836 348.41 64.031 351.992 64.031C356.504 64.031 360.984 62.133 364.145 58.447L400 16.645L400.072 495.441L364.145 453.553ZM344 152H104C99.578 152 96 155.578 96 160S99.578 168 104 168H344C348.422 168 352 164.422 352 160S348.422 152 344 152ZM344 248H104C99.578 248 96 251.578 96 256S99.578 264 104 264H344C348.422 264 352 260.422 352 256S348.422 248 344 248ZM344 344H104C99.578 344 96 347.594 96 352S99.578 360 104 360H344C348.422 360 352 356.406 352 352S348.422 344 344 344Z" })
  }
));
ReceiptThin.displayName = "ReceiptThin";
var Receipt_default = ReceiptThin;
