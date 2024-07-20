import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeltonLoader = () => {
    return (
        <SkeletonPlaceholder borderRadius={4}>
            <SkeletonPlaceholder.Item >
                <SkeletonPlaceholder.Item marginLeft={20} marginTop={50}>
                    <SkeletonPlaceholder.Item width={180} height={30} />
                    <SkeletonPlaceholder.Item marginTop={6} width={300} height={30} />
                </SkeletonPlaceholder.Item>

            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item >
                <SkeletonPlaceholder.Item marginTop={30}>
                    <SkeletonPlaceholder.Item width="90%" alignSelf="center" height={200} />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>

            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" marginTop={20} marginLeft={20}>
                <SkeletonPlaceholder.Item width={140} height={160} />
                <SkeletonPlaceholder.Item width={140} height={160} marginLeft={10} />
                <SkeletonPlaceholder.Item width={140} height={160} marginLeft={10} />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" marginTop={20} marginLeft={20}>
                <SkeletonPlaceholder.Item width={140} height={160} />
                <SkeletonPlaceholder.Item width={140} height={160} marginLeft={10} />
                <SkeletonPlaceholder.Item width={140} height={160} marginLeft={10} />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" marginTop={15} marginLeft={20}>
                <SkeletonPlaceholder.Item width={100} height={100} borderRadius={50}  />
                <SkeletonPlaceholder.Item width={100} height={100} borderRadius={50} marginLeft={10}/>
                <SkeletonPlaceholder.Item width={100} height={100} borderRadius={50}  marginLeft={10}/>
                <SkeletonPlaceholder.Item width={100} height={100} borderRadius={50}  marginLeft={10} />
            </SkeletonPlaceholder.Item>



        </SkeletonPlaceholder>
    )
}

export default SkeltonLoader